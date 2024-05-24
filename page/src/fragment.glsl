// extension:  GLSL Canvas

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
  vec2 p = gl_FragCoord.xy  / 1000. + u_time;
  float r = (sin(u_time) + 1.) / 2. + mod(p.x, 1.0) - mod(p.x, 1.0);
  float g = (cos(u_time) + 1.) / 2. + mod(p.y, 1.0) - mod(p.y, 1.0);
  gl_FragColor = vec4(vec3(r, g, 0.), 1.0);
}
