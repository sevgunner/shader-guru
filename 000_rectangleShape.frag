#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float edgelength(float t, float start, float end, float blur) {

    float edge1 = smoothstep(start-blur, start+blur, t);
    float edge2 = smoothstep(end-blur, end+blur, t);

    return edge1*edge2;
}

float rectangleshape(vec2 position, float left, float right, float top, float bottom, float blur) {

    float verticalEdge = edgelength(position.x, left, right, blur);
    float horizontalEdge = edgelength(position.y, top, bottom, blur);

    return verticalEdge*horizontalEdge;

}

void main(){
    
    vec2 position = gl_FragCoord.xy / u_resolution;
    //position -= 0.5;
    float x = position.x;
    float y = position.y;
    float a = 0.0;
    a = 0.5;

    vec3 color = vec3(0.0);
    float mask = 0.0;

    mask = rectangleshape(vec2(x,y), -a, a, a, -a, 0.001);


    color = vec3(0.5373, 0.6196, 0.6275)*mask;


    gl_FragColor= vec4(color, 1.0);
}