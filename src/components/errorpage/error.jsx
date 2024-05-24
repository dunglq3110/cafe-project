const Error = () => {
    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 text-center">
                        <span class="display-1 d-block">Oops!!!</span>
                        <div class="mb-4 lead">We can't seem to find the page you are looking for or error data</div>
                        <Link to="/manager/home">
                            <a href="#" class="btn btn-large btn-info"><i class="icon-home icon-white"></i> Take Me Home</a>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;