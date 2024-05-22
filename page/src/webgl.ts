export const gl_main = () => {

    const canvas = document.querySelector<HTMLCanvasElement>('#glcanvas');
    if (canvas === null) {
        console.error('Failed to find canvas element');
        return;
    }

    const gl = canvas.getContext('webgl');
    if (gl === null) {
        console.error('Failed to get WebGL context');
        return;
    }

    // // クリアカラーを黒に設定し、完全に不透明する
    // gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // // 指定されたクリアカラーでカラーバッファーをクリアする
    // gl.clear(gl.COLOR_BUFFER_BIT);
}
