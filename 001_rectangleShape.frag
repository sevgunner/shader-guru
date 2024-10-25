#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float recshape(vec2 position, vec2 scale){

    scale = vec2(0.5)- scale*0.5;
    vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
    shaper *= vec2(step(scale.x, 1.0-position.x), step(scale.y, 1.0-position.y));

    return shaper.x * shaper.y;

}


void main(){
    
    vec2 position = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);
    
    float rectangle = recshape(position, vec2(0.1, 0.1));



    color = vec3(0.5373, 0.6196, 0.6275)*rectangle;


    gl_FragColor= vec4(color, 1.0);
}