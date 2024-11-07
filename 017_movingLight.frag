#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    coord.xy -= 0.5;
    coord.x += sin(u_time) + cos(u_time * 2.0); 
    coord.y += cos(u_time) + sin(u_time * 2.0); 
    float color = 0.0;

    color += 0.1 * (abs(sin(u_time) + 0.1) / length(coord.xy));



    gl_FragColor = vec4(vec3(color), 1.0);
}