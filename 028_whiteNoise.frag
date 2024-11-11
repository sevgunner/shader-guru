#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float random2D(vec2 coord){
    return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(){
vec2 coord = gl_FragCoord.xy / u_resolution;

float grain = 0.0;

grain = random2D(vec2(sin(coord/999999.))* u_time);
vec3 color = vec3(grain);

gl_FragColor = vec4(color, 1.0);
}