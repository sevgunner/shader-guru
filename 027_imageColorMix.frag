#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D u_texture_0;

void main(){
vec2 coord = gl_FragCoord.xy / u_resolution;
vec3 color = vec3(0.32, 0.73, 0.2);

vec4 image = texture2D(u_texture_0, coord);

color = mix(color, image.rgb, 0.5);


gl_FragColor = vec4(color, 1.0);
}