function Form() {
    
    return <><Services selectedServices={selectedServices} onServicePressed={(serviceName) => setSelectedService(...)}/></>
}

function Services() {
    return <><Card/> <Card/></>
}