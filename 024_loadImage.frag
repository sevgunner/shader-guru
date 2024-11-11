#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D u_texture_0;


void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    
    gl_FragColor = texture2D(u_texture_0, coord);

   
}