#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float circleshape(vec2 position, float radius) {

    return step(radius, length(position));

}

void main(){
    vec2 position = gl_FragCoord.xy / u_resolution;
    position -= 0.5;

    vec3 color = vec3(0.2118, 0.3961, 0.2627);

    float circle = circleshape(position, 0.3);

    circle = 1.0-circle;
    

    color *= circle;

    gl_FragColor= vec4(color, 1.0);
}