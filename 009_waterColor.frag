#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;


void main() {
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    for(int n = 1; n<10; n++) {
        float i = float(n);
        coord += vec2( 0.7/i*sin(i*coord.y + u_time+0.3*i), 0.4/i*sin(coord.x + u_time+0.3*i));
}


    //coord += vec2( 0.7/sin(coord.y + u_time+0.3), 0.4/sin(coord.x + u_time+0.3));

    color = vec3(0.5*sin(coord.x) + 0.5, 0.5 * sin(coord.y) + 0.5, sin(coord.x + coord.y));


    gl_FragColor = vec4(color, 1.0);

}