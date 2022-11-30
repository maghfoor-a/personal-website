const left: any = document.getElementById("left-side");

function handleOnMove(e: any) {
  const p = (e.clientX / window.innerWidth) * 100;

  left.style.width = `${p}%`;
}

document.onmousemove = (e) => handleOnMove(e);

export default handleOnMove;
