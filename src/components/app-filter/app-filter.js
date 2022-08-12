import "./app-filter.css";

const AppFilter = () => {
    return(
        <div className="btn-group">
            <div className="btn btn-light"
            type="button">
                Всі співробітники
            </div>
            <div className="btn btn-outline-light"
            type="button">
                На підвищення
            </div>
            <div className="btn btn-outline-light"
            type="button">
                З/П більше $1000
            </div>
        </div>
    );
}

export default AppFilter;