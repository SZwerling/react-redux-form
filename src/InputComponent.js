import React from 'react';
import { Control, LocalForm } from 'react-redux-form';
import { oneInput } from './actions/index';
import { connect } from 'react-redux'



class Input extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   
    handleSubmit(values){
        this.props.oneInput(values.front, values.back)
        console.log(values)
    }

   

    render(){
  
        console.log(this.props)
        return(  
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <div className="form-group">
                                <label htmlFor="front" md={2}>front</label>
                                <Control.text model=".front" id="front" name="front"
                                    placeholder="front"
                                    className="form-control"
                                    />
                            </div>  
                            <div className="form-group">
                                <label htmlFor="back" md={2}>back</label>
                                <Control.text model=".back" id="back" name="back"
                                        placeholder="back"
                                        className="form-control"
                                    />
                            </div> 
                                    <button type="submit" color="primary">
                                        Send Feedback
                                    </button>
                                    
                        </LocalForm>
         
        )
    }
}

const mapStateToProps = (state) => {
    return { text: state.text }
}

const mapDispatchToProps = ({
    oneInput: (front, back) => (oneInput(front, back))  
});





export default connect(mapStateToProps, mapDispatchToProps)(Input);


//form.newCard.values.front


