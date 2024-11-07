#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float random2d(vec2 coord){
    return fract(sin(dot(coord.xy, vec2(1.5, 0.5))));
}

void main(){
    vec2 coord = gl_FragCoord.xy * 0.009;
    coord -= u_time + vec2(sin(coord.y), cos(coord.x));
    //coord *= 5.;

    float rand01 = fract(random2d(floor(coord.xy) + u_time / 62.));
    float rand02 = fract(random2d(floor(coord.xy) + u_time / 5.));

    rand01 *= 0.4 - length(coord.xy);

    gl_FragColor = vec4(rand01, rand02, 0.0, 1.0);
}