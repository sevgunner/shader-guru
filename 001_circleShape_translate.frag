#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; 
uniform float u_time;

float circleshape(vec2 position, float radius) {

    return step(radius, length(position - (0.5)));
}

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec2 translate = vec2(sin(u_time/5.0), cos(u_time));
    coord += translate;

    color += vec3(circleshape(coord, 0.2));

    color *= vec3(0.35, 0.32, 0.48)*color;


    gl_FragColor= vec4(color, 1.0);
}