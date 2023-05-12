

onload= function() {

    scroll_to = document.getElementsByClassName("scroll_to");
    paragraphs = document.getElementsByTagName("p");


    contents_list = document.getElementById("contents");
    for (let i = 0; i < scroll_to.length; i++) {
        id = scroll_to[i].innerText;
        console.log(scroll_to[i]);
        let new_item =  document.createElement("div");
        new_item.setAttribute("class", "link");

        let list_element = document.createElement("li");
        list_element.innerText = id;

        let text = document.createElement("p");
        text.innerText = scroll_to[i].offsetTop;


        new_item.appendChild(list_element);
        new_item.appendChild(text);

        new_item.onclick = function() {
            window.scrollTo(0, scroll_to[i].offsetTop-200);
        }

        contents_list.appendChild(new_item);

    }


}

var myVertexShaderSrc =         
        "attribute vec3 pos;"+      
        "void main() {"+        
        "   gl_Position = vec4(pos, 1.0);"+     
        "}"
    ;

var vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, myVertexShaderSrc);
gl.compileShader(vertexShader);

gl.attachShader(program, vertexShader);