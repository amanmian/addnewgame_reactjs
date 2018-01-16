import React from 'react';
import classnames from 'classnames';
import './gamesform.css';

class Gamesform extends React.Component{
    state = {
        title : '',
        coverUrl : '',
        errors : {},
        loading : false

    }

    handleChange = (e) =>
                {
                    if(this.state.errors[e.target.name]!=='') {
                        let errors = Object.assign({},this.state.errors);
                        delete errors[e.target.name];
                        this.setState({[e.target.name] : e.target.value,
                        errors
                        });
                    }
                }

    handleSubmit = (e) =>
                {
                    e.preventDefault();

                    //validation
                    
                    let errors={};
                    if(this.state.title === '') errors.title ="Title can't be empty" ;
                    if(this.state.coverUrl === '') errors.coverUrl = "Cover URL can't be empty";
                    this.setState({errors});
                    const isValid = Object.keys(errors).length === 0;

                    if(isValid)
                    {
                        const {title,coverUrl} = this.state;
                        this.setState({loading: true})
                        //this.props.saveGames({title,coverUrl});
                    }
                }       
                
                
       

    render()
    {
        return(
           <form className={classnames('ui','form',{loading: this.state.loading})} onSubmit={this.handleSubmit}>
               <h1>Add New</h1>

               <div className={classnames("field", "form-group", {error:this.state.errors.title})}>
                   <label className="labels" htmlFor="title"><strong>Label</strong></label>
                   <input  className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleChange} id="title"  />
                   <span className="validationMsg"> {this.state.errors.title} </span>
               </div>

               <div className={classnames("field", "form-group", {error:this.state.errors.coverUrl})}>
                   <label className="labels" htmlFor="coverUrl"><strong>Cover URL</strong></label>
                   <input className="form-control" name="coverUrl" value={this.state.coverUrl} onChange={this.handleChange} id="coverUrl"  />
                   <span className="validationMsg"> {this.state.errors.coverUrl} </span>
               </div>

               <div className="field">
                {this.state.coverUrl !== '' && <img src={this.state.coverUrl} alt="coverUrl" className="ui small bordered image" />}
               </div>

               <div className="field">
                   <button className="btn btn-primary" type="submit">Save</button>
               </div>
           </form>
        );
    }
}

export default Gamesform;