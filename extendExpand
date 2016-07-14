// Implement & testing extend and expand concept

var A = function(){
  
};

A.prototype.dance = function(){
  console.log("A dance");
};

var B = function(){};

B.prototype.jump = function(){
  console.log("B jump");
};

Function.prototype.extends = function(proto){
    var that = function(){};
    
    that.expand(proto);
    that.expand(this);
  
    return that;
};

Function.prototype.expand = function(proto){
  for(var prop in proto.prototype){
      this.prototype[prop] = proto.prototype[prop];
    }
};

// Test
var C = A.extends(B);

var c = new C();
c.dance();
c.jump(); // call success

var a = new A();
a.dance();
a.jump(); // Throw exception
