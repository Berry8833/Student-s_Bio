const img = document.getElementById("mybio");
img.addEventListener("click", changeShape);

const shapeArr = [
    // Hexagon
    "25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%",
    //Paralleogon 
    "25% 0%, 100% 0%, 75% 100%, 0% 100%",
    // Trapezoid
    "20% 0%, 80% 0%, 100% 100%, 0% 100%",
    // Left point
    "25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%",
    // Frame
    "50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%",
 ];

 function changeShape() {
    const randomShape = Math.floor(Math.random() * shapeArr.length);
    const newClipPath = shapeArr[randomShape];
    const currentClipPath = getComputedStyle(img).getPropertyValue("--shape");

    // img.style.setProperty("--shape", shapeArr[randomShape]);

 if (currentClipPath !== newClipPath) {
    img.style.setProperty("--shape", newClipPath);
 }else {
    img.style.setProperty("--shape",shapeArr[randomShape + 1]);
    console.log(shapeArr[randomShape] + 1);
 }
}
