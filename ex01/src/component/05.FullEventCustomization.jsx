import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, setOptions } from '@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

function FullEventCustomization() {

    const [view, setView] = React.useState('month');
    const [myEvents, setEvents] = React.useState([]);

    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/agenda-events/', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);

    const [calView, setCalView] = React.useState(
        {
            agenda: { type: 'month' }
        }
    );
    
    const renderEvent = React.useCallback((data) => {
        return <div className="md-full-event">
            <img className="md-full-event-img" src={"https://img.mobiscroll.com/demos/" + data.original.img} />
            <div className="md-full-event-details">
                <div className="md-full-event-title">{data.title}</div>
                <div className="md-full-event-location">
                    <div className="md-full-event-label">Location</div>
                    <div>{data.original.location}</div>
                </div>
                <div className="md-full-event-time">
                    <div className="md-full-event-label">Time</div>
                    <div>{data.start}</div>
                </div>
            </div>
        </div>
    });

    return (
        <div className="md-switching-view-cont">
            <div className="md-switching-view-cal-cont">
                <Eventcalendar
                    renderEvent={renderEvent}
                    view={calView}
                    data={myEvents}
                />
            </div>
        </div>
    ); 
}


export default FullEventCustomization;