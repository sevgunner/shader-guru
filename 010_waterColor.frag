#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

const int AMOUNT = 3;

void main() {
    vec2 coord = 30.0*(gl_FragCoord.xy - u_resolution / 2.0)/min(u_resolution.y, u_resolution.x);

    

    float len;

    for (int i = 0; i < AMOUNT; i++){

        len = length(vec2(coord.x, coord.y));

        coord.x = coord.x - cos(coord.y + sin(len) + cos(u_time / 1.0));
        coord.y = coord.y + sin(coord.x + cos(len) + sin(u_time / 1.0));
    }

    vec3 sColor = vec3(0.0, 0.85, 0.89);

    vec3 color = vec3(cos(len), cos(len*2.0), cos(len*2.0));

    color = mix(color, sColor, 0.7);

    gl_FragColor = vec4(color, 1.0);

}