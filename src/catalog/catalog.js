import React from 'react';
import CardList from './cardlist'

class CatalogPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFilters: [
                { id: "Twitter", filter: "twitter", active: false },
                { id: "Reddit", filter: "reddit", active: false },
                { id: "Facebook", filter: "facebook", active: false },
                { id: "Tumblr", filter: "tumblr", active: false },
                { id: "Other", filter: "other", active: false }
            ],
            calculatedFilters: []
        }

        // bind filter calculation to this instance
        this.getCalculatedFilters = this.getCalculatedFilters.bind(this);
        this.cardList = React.createRef();
    }

    getCalculatedFilters() {
        return this.state.calculatedFilters;
    }

    selectFilter = (e, name) => {
        e.preventDefault();
        var filters = this.state.selectedFilters;
        var calculated = [];

        // Iterate through filters
        for (var i in filters) {

            // Update filter if found
            if (filters[i].id == name) {
                filters[i].active = !filters[i].active;
            }

            // Recalculate whether this filter is in the filter list
            if (filters[i].active) {
                calculated.push(filters[i].filter);
            }
        }

        // Log filters
        this.setState({ selectedFilters: filters, calculatedFilters: calculated }, () => {
            this.cardList.current.update(true);
        });
    }

    isFilterSelected = (name) => {
        return this.state.selectedFilters.indexOf(name) != -1;
    }

    render() {
        return (
            <div>
                <div class="container bg-white">
                    <div class="columns py-2">
                        <h2>Catalog</h2>
                    </div>
                    <div class="columns">
                        <div class="column col-4 py-2">
                            <div class="btn-group btn-group-block">
                                {
                                    this.state.selectedFilters.map((item) =>
                                        <a className={item.active ? "btn btn-primary px-2" : "btn btn-link px-2"} onClick={(e) => this.selectFilter(e, item.id)}>{item.id}</a>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <CardList ref={this.cardList} filters={this.getCalculatedFilters} />
            </div>
        )
    }
}

export default CatalogPage;