
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random (vec2 st, float seed) {
    return fract(sin(dot(st.xy/seed,
                        vec2(12.9898,78.233)))*
        43758.5453123);
}





void main() {

    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    float x = gl_FragCoord.x;
    float y = gl_FragCoord.y;

    vec2 mouse = u_mouse/u_resolution.xy;



    vec3 color=vec3(1.0);

    float distance1 = distance(st, vec2(0.7, 0.8))*3.0;
    float distance2 = distance(st, vec2(0.9, 0.9))*3.0;
    float distance3 = distance(st, vec2(0.85, 0.7))*3.0;

    vec3 colorful = vec3(
        clamp(-log2(-1000.0*pow(distance1, 10.0) + 1.0), 0.0,1.0),
        clamp(-log2(-1000.0*pow(distance2, 10.0) + 1.0), 0.0,1.0),
        clamp(-log2(-1000.0*pow(distance3, 10.0) + 1.0), 0.0,1.0)
    );
    

    vec3 black_lines = vec3 (abs(sin(x/10.0))>0.999?0.0:1.0);


    color =mix(color, colorful, 0.5);
    

    gl_FragColor = vec4(color,1.0);


}   