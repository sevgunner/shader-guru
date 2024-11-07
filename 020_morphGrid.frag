#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float random2d(vec2 coord){
    return fract(sin(dot(coord.xy, vec2(1.5, 0.5))));
}

void main(){
    vec2 coord = gl_FragCoord.xy * 0.005;
    vec3 color = vec3(0.0);


    float rand01 = fract(random2d(coord.xy * sin(coord.xy + u_time)));


    gl_FragColor = vec4(rand01, rand01*0.5, 0.0, 1.0);
}