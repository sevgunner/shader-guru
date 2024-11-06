#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    float color = 0.0;

    color = sin(coord.x*40. + cos(u_time + coord.x*5.0 + sin(u_time + coord.y))) *1.5;

    color *= sin(coord.y*40. + cos(u_time + coord.y*5.0 + sin(u_time + coord.x))) *1.5;



    gl_FragColor = vec4(vec3(color+0.5, coord.x + sin(u_time/2.), color), 1.0);


}