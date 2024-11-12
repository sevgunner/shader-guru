#extension GL_OES_standard_derivatives : enable

#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float sdfCircle(vec2 p, float r){
    return length(p) - r;
}

void main(){
    vec2 coord = gl_FragCoord.xy  / u_resolution;
    coord -= 0.5;
    coord *= 2.0;
    coord *= u_resolution / 300.0;

    vec3 black = vec3(0.0);
    vec3 white = vec3(1.0, 1.0, 1.0);
    vec3 red = vec3(1.0, 0.0, 0.0);
    vec3 blue = vec3(0.0, 0.4667, 1.0);
    vec3 orange = vec3(0.5412, 0.0667, 0.0667);
    vec3 color = black;
    color = vec3(coord.x, coord.y, 0.0);

    float radius = 2.5;
    vec2 center = vec2(0.0, 0.0);
    center = vec2(sin(2.0), 0.0);
    float distanceToCircle = sdfCircle(coord - center, radius);
    color = distanceToCircle > 0.0 ? orange : blue;

    //color = color * exp(distanceToCircle);
    //color = mix(white, color, step(0.1, distanceToCircle));
    //color = color * exp(-2.0 * abs(distanceToCircle));
    color = color * (1.0 - exp(-2.0 * abs(distanceToCircle)));

    //color = color * 0.8 + color * 0.2;
    //color = color * 0.8 + color * 0.2 * sin(distanceToCircle);
    //color = color * 0.8 + color * 0.2 * sin(distanceToCircle * 50.0);
    color = color * 0.8 + color * 0.2 * sin(50.0 *distanceToCircle- 4.0 * u_time);

    color = mix(white, color, smoothstep(0.0, 0.1,abs(distanceToCircle)));


    gl_FragColor = vec4(color, 1.0);
}