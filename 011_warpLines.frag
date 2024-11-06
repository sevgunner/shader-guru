#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){

    vec2 coord = gl_FragCoord.xy / u_resolution;
    float color = 0.0;

    color = sin(coord.x * 50.0 + sin(u_time*5.0 + coord.y*50.))*2.0;
    

    gl_FragColor = vec4(vec3(color,color+1.,1.0), 1.0);

}