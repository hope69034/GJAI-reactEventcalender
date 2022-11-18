import { Eventcalendar, setOptions, Popup, Button, formatDate, toast } from '@mobiscroll/react';
import React from "react";


setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

const defaultAppointments = [{
    title: 'Jude Chester',
    age: 69,
    start: '2022-11-18T08:00',
    end: '2022-11-18T08:45',
    confirmed: false,
    reason: 'Headaches morning & afternoon',
    location: 'Topmed, Building A, Room 203',
    color: '#b33d3d'
}, {
    title: 'Leon Porter',
    age: 44,
    start: '2022-11-18T09:00',
    end: '2022-11-18T09:45',
    confirmed: false,
    reason: 'Left abdominal pain',
    location: 'Topmed, Building D, Room 360',
    color: '#b33d3d'
}, {
    title: 'Merv Kenny',
    age: 56,
    start: '2022-11-18T10:00',
    end: '2022-11-18T10:45',
    confirmed: true,
    reason: 'Itchy, red rashes',
    location: 'Topmed, Building D, Room 360',
    color: '#b33d3d'
}, {
    title: 'Derek Austyn',
    age: 72,
    start: '2022-11-18T13:00',
    end: '2022-11-18T13:45',
    confirmed: false,
    reason: 'Nausea & weakness',
    location: 'Rose Medical Center, Room 18',
    color: '#b33d3d'
}, {
    title: 'Jenifer Kalyn',
    age: 65,
    start: '2022-11-18T14:00',
    end: '2022-11-18T14:45',
    confirmed: true,
    reason: 'Cough & fever',
    location: 'Rose Medical Center, Room 18',
    color: '#b33d3d'
}, {
    title: 'Lily Racquel',
    age: 54,
    start: '2022-11-18T10:00',
    end: '2022-11-18T10:45',
    confirmed: true,
    reason: 'Dry, persistent cough & headache',
    location: 'Procare, Building C, Room 12',
    color: '#309346'
}, {
    title: 'Mia Sawyer',
    age: 59,
    start: '2022-11-18T11:00',
    end: '2022-11-18T11:45',
    confirmed: true,
    reason: 'Difficulty sleeping & loss of appetite',
    location: 'Procare, Building C, Room 12',
    color: '#309346'
}, {
    title: 'Fred Valdez',
    age: 62,
    start: '2022-11-18T15:00',
    end: '2022-11-18T15:45',
    confirmed: false,
    reason: 'High blood pressure',
    location: 'Procare, Building C, Room 40',
    color: '#309346'
}, {
    title: 'Sylvia Cale',
    age: 41,
    start: '2022-11-18T08:00',
    end: '2022-11-18T08:45',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'MedStar, Building A, Room 1',
    color: '#c77c0a'
}, {
    title: 'Isadora Lyric',
    age: 30,
    start: '2022-11-18T09:00',
    end: '2022-11-18T09:45',
    confirmed: false,
    reason: 'Constant tiredness & weakness',
    location: 'MedStar, Building A, Room 1',
    color: '#c77c0a'
}, {
    title: 'Jon Candace',
    age: 63,
    start: '2022-11-18T12:00',
    end: '2022-11-18T12:45',
    confirmed: true,
    reason: 'Nausea & weakness',
    location: 'MedStar, Building A, Room 1',
    color: '#c77c0a'
}, {
    title: 'Layton Drake',
    age: 57,
    start: '2022-11-18T13:00',
    end: '2022-11-18T13:45',
    confirmed: true,
    reason: 'Headaches & loss of appetite',
    location: 'Vitalife, Room 160',
    color: '#c77c0a'
}, {
    title: 'Florence Amy',
    age: 73,
    start: '2022-11-18T14:00',
    end: '2022-11-18T14:45',
    confirmed: false,
    reason: 'Dry, persistent cough & headache',
    location: 'Vitalife, Room 160',
    color: '#c77c0a'
}, {
    title: 'Willis Kane',
    age: 44,
    start: '2022-11-19T08:00',
    end: '2022-11-19T08:45',
    confirmed: true,
    reason: 'Back pain',
    location: 'Care Cente, Room 320r',
    color: '#b33d3d'
}, {
    title: 'Theo Calanthia',
    age: 60,
    start: '2022-11-19T09:00',
    end: '2022-11-19T09:45',
    confirmed: true,
    reason: 'Anxiousness & sleeping disorder',
    location: 'Care Center, Room 320',
    color: '#b33d3d'
}, {
    title: 'Ford Kaiden',
    age: 53,
    start: '2022-11-19T14:00',
    end: '2022-11-19T14:45',
    confirmed: true,
    reason: 'Nausea & vomiting',
    location: 'Care Center, Room 206',
    color: '#b33d3d'
}, {
    title: 'Jewell Ryder',
    age: 75,
    start: '2022-11-19T15:00',
    end: '2022-11-19T15:45',
    confirmed: false,
    reason: 'High blood pressure',
    location: 'Care Center, Room 206',
    color: '#b33d3d'
}, {
    title: 'Antonia Cindra',
    age: 48,
    start: '2022-11-19T12:00',
    end: '2022-11-19T12:45',
    confirmed: true,
    reason: 'Dry, persistent cough',
    location: 'Medica Zone, Building C, Room 2',
    color: '#c77c0a'
}, {
    title: 'Gerry Irma',
    age: 50,
    start: '2022-11-19T13:00',
    end: '2022-11-19T13:45',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'Medica Zone, Building C, Room 2',
    color: '#c77c0a'
}, {
    title: 'Carlyn Dorothy',
    age: 36,
    start: '2022-11-19T14:00',
    end: '2022-11-19T14:45',
    confirmed: true,
    reason: 'Tiredness & muscle pain',
    location: 'Medica Zone, Building C, Room 2',
    color: '#c77c0a'
}, {
    title: 'Alma Potter',
    age: 74,
    start: '2022-11-17T10:00',
    end: '2022-11-17T10:45',
    confirmed: true,
    reason: 'High blood pressure',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d'
}, {
    title: 'Debra Aguilar',
    age: 47,
    start: '2022-11-17T11:00',
    end: '2022-11-17T11:45',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d'
}, {
    title: 'Tommie Love',
    age: 42,
    start: '2022-11-17T12:00',
    end: '2022-11-17T12:45',
    confirmed: false,
    reason: 'Dry, persistent cough & headache',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d'
}, {
    title: 'Marjorie White',
    age: 55,
    start: '2022-11-17T13:00',
    end: '2022-11-17T13:45',
    confirmed: true,
    reason: 'Back pain',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d'
}, {
    title: 'Brandon Perkins',
    age: 68,
    start: '2022-11-17T14:00',
    end: '2022-11-17T14:45',
    confirmed: true,
    reason: 'Swollen ankles',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d'
}, {
    title: 'Lora Wilson',
    age: 66,
    start: '2022-11-17T15:00',
    end: '2022-11-17T15:45',
    confirmed: false,
    reason: 'Fever & headache',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d'
}, {
    title: 'Ismael Bates',
    age: 58,
    start: '2022-11-17T08:00',
    end: '2022-11-17T08:45',
    confirmed: false,
    reason: 'Tiredness & muscle pain',
    location: 'Care Center, Room 300',
    color: '#309346'
}, {
    title: 'Archie Wilkins',
    age: 69,
    start: '2022-11-17T09:00',
    end: '2022-11-17T09:45',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Care Center, Room 300',
    color: '#309346'
}, {
    title: 'Christie Baker',
    age: 71,
    start: '2022-11-17T10:00',
    end: '2022-11-17T10:45',
    confirmed: true,
    reason: 'Headaches morning & afternoon',
    location: 'Care Center, Room 300',
    color: '#309346'
}, {
    title: 'Laura Shelton',
    age: 45,
    start: '2022-11-17T12:00',
    end: '2022-11-17T12:45',
    confirmed: false,
    reason: 'Dry, persistent cough',
    location: 'Care Center, Room 300',
    color: '#309346'
}, {
    title: 'Mary Hudson',
    age: 77,
    start: '2022-11-17T09:00',
    end: '2022-11-17T09:45',
    confirmed: true,
    reason: 'Fever & sore throat',
    location: 'Medica Zone, Room 45',
    color: '#c77c0a'
}, {
    title: 'Ralph Rice',
    age: 64,
    start: '2022-11-17T10:00',
    end: '2022-11-17T10:45',
    confirmed: true,
    reason: 'Left abdominal pain',
    location: 'Medica Zone, Room 45',
    color: '#c77c0a'
}, {
    title: 'Marc Hoffman',
    age: 53,
    start: '2022-11-17T12:00',
    end: '2022-11-17T12:45',
    confirmed: true,
    reason: 'Dry, persistent cough & headache',
    location: 'Medica Zone, Room 45',
    color: '#c77c0a'
}, {
    title: 'Arlene Lyons',
    age: 41,
    start: '2022-11-17T14:00',
    end: '2022-11-17T14:45',
    confirmed: true,
    reason: 'Nausea & weakness',
    location: 'Care Center, Room 202',
    color: '#c77c0a'
}, {
    title: 'Thelma Shaw',
    age: 26,
    start: '2022-11-17T15:00',
    end: '2022-11-17T15:45',
    confirmed: true,
    reason: 'Anxiousness & sleeping disorder',
    location: 'Care Center, Room 202',
    color: '#c77c0a'
}, {
    title: 'Dory Edie',
    age: 45,
    start: '2022-11-16T09:00',
    end: '2022-11-16T09:45',
    confirmed: true,
    reason: 'Right abdominal pain',
    location: 'Vitacure, Building A, Room 203',
    color: '#309346'
}, {
    title: 'Kaylin Toni',
    age: 68,
    start: '2022-11-16T10:00',
    end: '2022-11-16T10:45',
    confirmed: true,
    reason: 'Itchy, red rashes',
    location: 'Vitacure, Building A, Room 203',
    color: '#309346'
}, {
    title: 'Gray Kestrel',
    age: 60,
    start: '2022-11-16T12:00',
    end: '2022-11-16T12:45',
    confirmed: true,
    reason: 'Cough & fever',
    location: 'Vitacure, Building A, Room 203',
    color: '#309346'
}, {
    title: 'Reg Izabelle',
    age: 41,
    start: '2022-11-16T14:00',
    end: '2022-11-16T14:45',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Medica Zone, Room 13',
    color: '#309346'
}, {
    title: 'Lou Andie',
    age: 76,
    start: '2022-11-16T15:00',
    end: '2022-11-16T15:45',
    confirmed: true,
    reason: 'High blood pressure',
    location: 'Medica Zone, Room 13',
    color: '#309346'
}, {
    title: 'Yancy Dustin',
    age: 52,
    start: '2022-11-16T10:00',
    end: '2022-11-16T10:45',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Vitacure, Building E, Room 50',
    color: '#c77c0a'
}, {
    title: 'Terry Clark',
    age: 78,
    start: '2022-11-16T11:00',
    end: '2022-11-16T11:45',
    confirmed: true,
    reason: 'Swollen ankles',
    location: 'Vitacure, Building E, Room 50',
    color: '#c77c0a'
}];

function CustomEventTooltip() {
    const [appointments, setAppointments] = React.useState(defaultAppointments);
    const [isOpen, setOpen] = React.useState(false);
    const [anchor, setAnchor] = React.useState(null);
    const [currentEvent, setCurrentEvent] = React.useState(null);
    const [info, setInfo] = React.useState('');
    const [time, setTime] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [reason, setReason] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [buttonText, setButtonText] = React.useState('');
    const [buttonType, setButtonType] = React.useState('');
    const [bgColor, setBgColor] = React.useState('');
    const timerRef = React.useRef(null);
    
    const view = React.useMemo(() => {
        return {
            agenda: {
                type: 'week',
                startDay: 1,
                endDay: 5
            }
        };
    }, []);
    
    const onEventHoverIn = React.useCallback((args) => {
        const event = args.event;
        const time = formatDate('hh:mm A', new Date(event.start)) + ' - ' + formatDate('hh:mm A', new Date(event.end));

        setCurrentEvent(event);

        if (event.confirmed) {
            setStatus('Confirmed');
            setButtonText('Cancel appointment');
            setButtonType('warning');
        } else {
            setStatus('Canceled');
            setButtonText('Confirm appointment');
            setButtonType('success');
        }
        
        setBgColor(event.color);
        setInfo(event.title + ', Age: ' + event.age);
        setTime(time);
        setReason(event.reason);
        setLocation(event.location);
        
        if(timerRef.current) {
            clearTimeout(timerRef.current);
        }
        
        setAnchor(args.domEvent.target);
        setOpen(true);
    }, []);
    
    const onEventHoverOut = React.useCallback(() => {
        timerRef.current =setTimeout(() => { setOpen(false); }, 200);
    }, []);
    
    const onEventClick = React.useCallback(() => {
        setOpen(true);
    }, []);
    
    const onMouseEnter = React.useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    }, []);
    
    const onMouseLeave = React.useCallback(() => {
        timerRef.current =setTimeout(() => { setOpen(false); }, 200);
    }, []);

    const setStatusButton = React.useCallback(() => {
        setOpen(false);
        const index = appointments.findIndex(item => item.id === currentEvent.id);
        const newApp = [...appointments];
        newApp[index].confirmed = !appointments[index].confirmed;
        setAppointments(newApp);
        toast({
            message: 'Appointment ' + (currentEvent.confirmed ? 'confirmed' : 'canceled')
        });
    }, [appointments, currentEvent]);


    const viewFile = React.useCallback(() => {
        setOpen(false);
        toast({
            message: 'View file'
        });
    }, []);
    
    const deleteApp = React.useCallback(() => {
        setAppointments(appointments.filter(item => item.id !== currentEvent.id));
        setOpen(false);
        toast({
            message: 'Appointment deleted'
        });
    }, [appointments, currentEvent]);
    
    return <div>
        <Eventcalendar
            view={view}
            data={appointments}
            clickToCreate={false}
            dragToCreate={false}
            showEventTooltip={false}
            onEventHoverIn={onEventHoverIn}
            onEventHoverOut={onEventHoverOut}
            onEventClick={onEventClick}
        />
        <Popup
            display="anchored"
            isOpen={isOpen}
            anchor={anchor}
            touchUi={false}
            showOverlay={false}
            contentPadding={false}
            closeOnOverlayClick={false}
            width={350}
            cssClass="md-tooltip"
        >
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div className="md-tooltip-header" style={{ backgroundColor: bgColor }}>
                    <span className="md-tooltip-name-age">{info}</span>
                    <span className="md-tooltip-time">{time}</span>
                </div>
                <div className="md-tooltip-info">
                    <div className="md-tooltip-title">
                        Status: <span className="md-tooltip-status md-tooltip-text">{status}</span>
                        <Button color={buttonType} variant="outline" className="md-tooltip-status-button" onClick={setStatusButton}>{buttonText}</Button>
                    </div>
                    <div className="md-tooltip-title">Reason for visit: <span className="md-tooltip-reason md-tooltip-text">{reason}</span></div>
                    <div className="md-tooltip-title">Location: <span className="md-tooltip-location md-tooltip-text">{location}</span></div>
                    <Button color="secondary" className="md-tooltip-view-button" onClick={viewFile}>View patient file</Button>
                    <Button color="danger" variant="outline" className="md-tooltip-delete-button" onClick={deleteApp}>Delete appointment</Button>
                </div>
            </div>
        </Popup>
    </div>
}

export default CustomEventTooltip;