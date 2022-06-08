
class App extends React.Component {

    state = {
        groceries: groceryList,
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: true

    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,


        }

        console.log(newItem)

        this.setState({
            groceries: [newItem, ...this.state.groceries]
        })


    }

    render() {
        return (
            <div>
                <h1>Grocery Shopping</h1>
                <form className='form' onSubmit={this.handleSubmit} >
                    <label htmlFor="item">Item:</label>
                    <input type="text" value={this.state.item} onChange={this.handleChange} id="item" /> <br /><br />
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" value={this.state.brand} onChange={this.handleChange} /><br /><br />
                    <label htmlFor="units">Units:</label>
                    <input type="text" id="units" value={this.state.units} onChange={this.handleChange} /><br /><br />
                    <label htmlFor="quantity"> Quantity:</label>
                    <input type="number" id="quantity" value={this.state.quantity} onChange={this.handleChange} /><br /><br />
                    <label htmlFor="purchased">Purchased:</label>
                    <input type="text" id="purchased" value={this.state.isPurchased} onChange={this.handleChange} /><br /><br />
                    <input type="submit" className='button' />

                </form>

                <div className='preview'>
                    <h2>Preview our new item</h2>
                    <h3>Item: {this.state.item}</h3>
                    <h4>Brand: {this.state.brand}</h4>

                    <h5>Quantity: {this.state.quantity}</h5>
                    <h5>Units: {this.state.units}</h5>



                </div>


                <div className='list'>
                    <h2>Grocery List</h2>

                    <div>
                        <ul>
                            {this.state.groceries.map((grocery) => {
                                return (
                                    grocery.isPurchased ?
                                        <li>{grocery.item} &emsp; {grocery.brand} &emsp; {grocery.quantity}{grocery.units} </li>
                                        : "We did not purchase"
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        )
    }

}


ReactDOM.render(
    <App />,
    document.querySelector('.container')
)

console.log('hi')