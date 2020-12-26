<template>
    <div id="contact">
        <br>
        <br>
        <div class="container-sm">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <!-- Inicio Panel -->  
                    <div class="panel shadow-lg p-3 mb-5 rounded">      
                        <form id="contact" action="" method="post">
                            <h3>Formulario de contacto</h3>
                            <h4>Contáctenos para mayor información</h4>
                            <div class="form-group">
                                <input class="form-control" placeholder="Ingrese su nombre" type="text" tabindex="1" required autofocus>
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Ingrese un correo" type="email" tabindex="2" required>
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Ingrese un telefono (opcional)" type="tel" tabindex="3" required>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" placeholder="Ingrese su inquietud o tema...." tabindex="5" required></textarea>
                            </div>
                            <div class="form-group">
                                <button name="submit" type="submit" id="contact-submit" data-submit="...Enviar">Enviar</button>
                            </div>
                            <footer class="page-footer font-small blue pt-4"> 
                                <!-- Copyright -->
                                <div class="footer-copyright text-center py-3">© 2020 Copyright:<a href="#"> Finir</a>
                                </div>
                                <!-- Copyright -->
                            </footer> 
                        </form>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>