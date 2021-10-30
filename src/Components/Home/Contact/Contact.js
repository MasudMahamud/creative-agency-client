import React from 'react';

const handleBlur = e => {
    // console.log(e);
}

const handleSubmit = (e) => {
    console.log(e);

}

const Contact = () => {
    return (
        <div className="container mt-4 py-4" style={{ backgroundColor: '#FBD062' }}>
            <div className="row p-3">
                <div className="col-md-5 p-3 ms-3">
                    <h2> Let us handle your <br /> project professionally </h2>
                    <p> Some quick example text to build on the card title and make up the bulk of the card's content.  </p>
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group mb-3">
                            <label for="exampleInputEmail1">Email address</label>
                            <input onBlur={handleBlur} className="form-control" type="email" class="form-control" name="email" placeholder="Enter email" />
                        </div>
                        <div class="form-group mb-3">
                            <label for="exampleInputPassword1">Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Enter Name" />
                        </div>
                        <div className="form-group mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">message</label>
                        <textarea onBlur={handleBlur} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <div className="mt-5 text-center" style={{color:'#333'}}>
                <p>copyright creative agency -{(new Date()).getFullYear()}</p>
            </div>
        </div>
    );
};

export default Contact;