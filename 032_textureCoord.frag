#extension GL_OES_standard_derivatives : enable

#ifdef GL_ES
precision mediump float;
#endif


varying vec4 v_position;
varying vec4 v_normal;
varying vec2 v_texcoord;
varying vec3 v_color;

uniform mat4 u_projectionMatrix;
uniform mat4 u_modelViewMatrix;
uniform mat4 u_normalMatrix;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;


uniform sampler2D u_texture_2;


void main(){
//vec2 coord = gl_FragCoord.xy/ u_resolution;

//gl_FragColor = texture2D(u_texture_2, coord);
gl_FragColor = u_projectionMatrix * u_modelViewMatrix * u_normalMatrix * vec4(v_normal.xyx, 1.0);
}