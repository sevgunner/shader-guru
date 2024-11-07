#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(1.0);

    float size = 12.0;
    float alpha = sin(floor(coord.y * size) + u_time) ;


    gl_FragColor = vec4(color, alpha);

}