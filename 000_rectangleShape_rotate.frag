#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float recshape(vec2 position, vec2 scale){

    scale = vec2(0.5)- scale*0.5;
    vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
    shaper *= vec2(step(scale.x, 1.0-position.x), step(scale.y, 1.0-position.y));

    return shaper.x * shaper.y;

}

mat2 rotate(float angle) {

    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));

}


void main(){
    
    vec2 coord = gl_FragCoord.xy / u_resolution;
    coord.x -= 0.5;

    vec3 color = vec3(0.0);
    vec2 translate = vec2(sin(u_time/2.0), 0.0);

    coord += translate;

    coord -= vec2(0.5);
    coord = rotate(sin(u_time*5.0)) * coord;
    coord += vec2(0.5);


    color = vec3(recshape(coord, vec2(0.3)));


    gl_FragColor= vec4(color, 1.0);
}