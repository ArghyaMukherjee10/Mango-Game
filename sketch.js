const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var boy;
function preload(){

}
function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

    boy = new Boy(500,350,100,100)
}
function draw(){
    background(100);
    Engine.update(engine);
    boy.display()
}