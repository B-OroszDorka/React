import { Component } from 'react';
import smile from '../Images/smile.png';
import sad from '../Images/sad.png';

class RecipeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { checked: false };
    }

    handleCheckboxChange = () => {
        this.setState((prevState) => ({
            checked: !prevState.checked
        }));
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Név</th>
                            <th>Hozzávalók</th>
                            <th>Elkészítés</th>
                            <th>Bonyolultság</th>
                            <th>Kipróbáltam</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        <tr>
                            <td>{this.props.recipe.name}</td>
                            <td>
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    {this.props.recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>{this.props.recipe.instructions}</td>
                            <td>{this.props.recipe.difficulty}</td>
                            <td style={{ display: 'flex', alignItems: 'center', wordWrap: 'breakWord' }}>
                                <label >
                                    <input
                                        type="checkbox"
                                        checked={this.state.checked}
                                        onChange={this.handleCheckboxChange}
                                    />
                                    Kipróbáltam, finom lett!
                                </label>

                                {this.state.checked ? (
                                    <img src={smile} alt="Smiley face" style={{ width: '30px', height: 'auto', marginLeft: '10px' }} />
                                ) : (
                                    <img src={sad} alt="Sad smiley face" style={{ width: '30px', height: 'auto', marginLeft: '10px' }} />
                                )}
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RecipeComponent;
