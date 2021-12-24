
const Pricing = (props) => {
    return (
        <div id="pricing">
            <div className='container'>
                <div className='section-title text-center'>
                    <h2>Student Project Pricing</h2>
                </div>
                <div className="row">
                    {props.data && props.data.length > 0 && props.data.map((m, i) => {
                        return <div key={`${m.planName}-${i}`} className="col-md-4 col-sm-6">
                            <div className="pricing-table-3 basic">
                                <div className="pricing-table-header">
                                    <h4 className="plan"><strong>{m.planName}</strong></h4>
                                    <p>{m.desc}</p>
                                </div>
                                <div className="price"><strong>{m.price}</strong></div>
                                <div className="pricing-body">
                                    <ul className="pricing-table-ul pricing-ul">
                                        {m.features && m.features.length > 0 && m.features.map((f, fi) => {
                                            return <li key={`${f}-${fi}`}><i className="fa fa-send"></i>{f}</li>
                                        })}
                                    </ul>
                                    <a href="#/" className="view-more">View More</a>
                                </div>
                            </div>
                        </div>
                    })}
                    {/* <div className="col-md-4 col-sm-6">
                        <div className="pricing-table-3 premium">
                            <div className="pricing-table-header">
                                <h4 className="plan"><strong>PREMIUM</strong></h4>
                                <p>Loerm Ipsum Donor Sit Amet</p>
                            </div>
                            <div className="price"><strong>$8</strong> / MONTH</div>
                            <div className="pricing-body">
                                <ul className="pricing-table-ul">
                                    <li><i className="fa fa-send"></i> Unlimited Email Addresses</li>
                                    <li><i className="fa fa-cloud"></i> 80 GB Disk Space</li>
                                    <li><i className="fa fa-database"></i> Unlimited MySQL Database</li>
                                    <li className="not-avail"><i className="fa fa-clock-o"></i> 24X7 Support</li>
                                    <li className="not-avail"><i className="fa fa-envelope"></i> Email Support</li>
                                </ul><a href="#" className="view-more">View More</a></div>
                        </div>
                    </div> */}
                    {/* <div className="col-md-4 col-sm-12">
                        <div className="pricing-table-3 business">
                            <div className="pricing-table-header">
                                <h4 className="plan"><strong>BUSINESS</strong></h4>
                                <p>Loerm Ipsum Donor Sit Amet</p>
                            </div>
                            <div className="price"><strong>$12</strong> / MONTH</div>
                            <div className="pricing-body">
                                <ul className="pricing-table-ul">
                                    <li><i className="fa fa-send"></i> Unlimited Email Addresses</li>
                                    <li><i className="fa fa-cloud"></i> 120 GB Disk Space</li>
                                    <li><i className="fa fa-database"></i> Unlimited MySQL Database</li>
                                    <li className="not-avail"><i className="fa fa-clock-o"></i> 24X7 Support</li>
                                    <li className="not-avail"><i className="fa fa-envelope"></i> Email Support</li>
                                </ul><a href="#" className="view-more">View More</a></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Pricing;