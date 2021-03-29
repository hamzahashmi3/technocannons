import React from 'react'


function login() {
    return (
        <div>
            <section className="py-4 my-5 text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto shadow bg-dark p-5 rounded ">
                        <h1>Login</h1> <hr className="bg-white w-25 float-left" /> <br /><br />
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div class="pb-3">
                                    <a href="#" className="text-light ml-0">Forgot your password?</a>
                                </div>
                                <button type="submit" class="btn btn-outline-info">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default login
