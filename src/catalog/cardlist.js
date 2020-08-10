import React from 'react';
import ImageCard from './imgcard';

class CardList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            isEmpty: true,
            isAtEnd: false,
            items: []
        }

        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        this.update();
        document.addEventListener("scroll", this.onScroll, false);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.onScroll, false);
    }

    joinFilters(filters) {
        if (filters.length == 0) return "";
        return "&tags=[\""+filters.join("\",\"")+"\"]";
    }
    
    addPageNum(pg) {
        return "page="+pg.toString()
    }

    onScroll = () => {
        if (this.hasReachedBottom()) {
            this.update();
        }
    }

    hasReachedBottom() {
        return document.body.offsetHeight + Math.ceil(document.body.scrollTop) === document.body.scrollHeight;
    }

    update(ignoreAtEnd = false) {
        // We can't update anymore if we're at the end
        if (!ignoreAtEnd && this.state.isAtEnd) return;

        // The next page to fetch
        var nextPage = Math.round(this.state.items.length/20);
        
        // Make sure loading spinner shows when we are loading
        this.setState({isLoading: true});

        // Get filters and page number query parameters
        var filters = this.props.filters();
        var pageNum = this.addPageNum(nextPage);

        // Build request URL
        var reqUrl = "http://localhost:8080/api/v1/posts?" + pageNum + this.joinFilters(filters);

        // Fetch images from API
        fetch(reqUrl)
        .then(res => res.json())
        .then((res) => {
            this.setState({items: res, isLoading: false, isEmpty: res.length == 0, isAtEnd: res.length != 20});
        },
        (error) => {
            console.log("error fetching data: ", error);
        });
    }

    render() {
        const { isLoading, isEmpty } = this.state;
        var renderData;

        if (isLoading) {
            renderData = (
                <div class="loading large-spinner">
                </div>
            )
        } else if (isEmpty) {
            renderData = (
                <div class="empty">
                    <p class="empty-title h5">Could not find any images</p>
                    <p class="empty-subtitle">Either you are having connection issues or no images exist for the specified tags</p>
                </div>
            )
        } else {
            renderData = (
                <div class="container py-2">
                    <div class="columns">
                        {
                            this.state.items.map((item) => (
                                <ImageCard img={"http://localhost:8080"+item.img}/>
                            ))
                        }
                    </div>
                </div>
            )
        }

        return (
            <div class="py-2">
                {renderData}
            </div>
        )
    }
}

export default CardList;