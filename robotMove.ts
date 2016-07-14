// Robot move fun puzzle solving in TypeScript

interface Pos {
    X: number;
    Y: number;
}

var DirX = [-1, 0, 1, 0];
var DirY = [0, 1, 0, -1];

var Dir = ["West", "South", "East", "North"];

class Command {
    exec(robot: Robot) { }
}

class Left extends Command {
    exec(robot: Robot) {
        robot.Dir -= 1;
        robot.Dir = robot.Dir < 0 ? 3 : robot.Dir;
    }
}

class Right extends Command {
    exec(robot: Robot) {
        robot.Dir += 1;
        robot.Dir = robot.Dir > 3 ? 0 : robot.Dir;
    }
}

class Move extends Command {
    exec(robot: Robot) {
        robot.Pos = {
            X: robot.Pos.X + DirX[robot.Dir],
            Y: robot.Pos.Y + DirY[robot.Dir]
        }
    }
}

class Back extends Command {
    exec(robot: Robot) {
        robot.Pos = {
            X: robot.Pos.X - DirX[robot.Dir],
            Y: robot.Pos.Y - DirY[robot.Dir]
        }
    }
}

var CommandDict = [];
CommandDict["L"] = new Left();
CommandDict["R"] = new Right();
CommandDict["M"] = new Move();
CommandDict["B"] = new Back();
            
class Robot {
    Dir : number;
    constructor(public World: World, public Pos: Pos) {
        this.Dir = 0;
    }

    execute(command: string) {
        for (var i = 0; i < command.length; i++) {
            CommandDict[command[i]].exec(this);

            if (this.Pos.X > this.World.X || this.Pos.X < 0 || this.Pos.Y > this.World.Y || this.Pos.Y < 0)
                throw new RangeException();
        }
    }
}

class World {
    constructor(public X: number, public Y: number) {
    }
}

// Test
window.onload = () => {
    var world = new World(5, 7);
    var robot = new Robot(world, { X: 3, Y: 4 });
    robot.execute("LLRRMLBL");
    alert(robot.Pos.X + "|" + robot.Pos.Y + "| Facing " + Dir[robot.Dir] );
};
