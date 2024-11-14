let usuarios = [];
let idCounter = 1;

function agregarUsuario(nombre, usuario, edad, contrasena) {
    const nuevoUsuario = {
        id: idCounter++,
        nombre: nombre,
        usuario: usuario,
        edad: edad,
        contrasena: contrasena
    };
    usuarios.push(nuevoUsuario);
    mostrarUsuarios();
}

function editarUsuario(id) {
    const usuario = usuarios.find(u => u.id === id);
    if (usuario) {
        document.getElementById('userId').value = usuario.id;
        document.getElementById('Username').value = usuario.usuario;
        document.getElementById('nombre').value = usuario.nombre;
        document.getElementById('edad').value = usuario.edad;
        document.getElementById('contrasena').value = usuario.contrasena;
        const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
    }
}

function eliminarUsuario(id) {
    usuarios = usuarios.filter(u => u.id !== id);
    mostrarUsuarios();
}

function mostrarUsuarios() {
    const tbody = document.getElementById('userTableBody');
    tbody.innerHTML = '';
    usuarios.forEach(u => {
        const row = `<tr>
                        <th scope="row">${u.id}</th>
                        <td>${u.nombre}</td>
                        <td>${u.usuario}</td>
                        <td>${u.edad}</td>
                        <td>${u.contrasena}</td>
                        <td>
                            <button type="button" class="btn btn-danger" onclick="eliminarUsuario(${u.id})">Eliminar</button>
                            <button type="button" class="btn btn-warning" onclick="editarUsuario(${u.id})">Editar</button>
                        </td>
                    </tr>`;
        tbody.innerHTML += row;
    });
}

function guardarUsuario() {
    const userId = document.getElementById('userId').value;
    const username = document.getElementById('Username').value;
    const name = document.getElementById('nombre').value;
    const age = document.getElementById('edad').value;
    const password = document.getElementById('contrasena').value;

    if (userId) {
        const usuario = usuarios.find(u => u.id == userId);
        if (usuario) {
            usuario.usuario = username;
            usuario.nombre = name;
            usuario.edad = age;
            usuario.contrasena = password;
        }
    } else {
        agregarUsuario(name, username, age, password);
    }

    document.getElementById('userId').value = '';
    document.getElementById('Username').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('contrasena').value = '';
    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();
    mostrarUsuarios();
}
