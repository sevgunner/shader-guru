#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D u_texture_0;

void main(){
vec2 coord = gl_FragCoord.xy / u_resolution;
vec3 color = vec3(0.0);

vec4 image = texture2D(u_texture_0, coord);
image.r += sin(coord.y * 100.0);
image.r += sin(coord.x * 100.0);

gl_FragColor = vec4(image);


}