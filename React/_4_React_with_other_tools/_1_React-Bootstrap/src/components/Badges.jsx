import React from 'react'

const Badges = () => {
    return (
        <div>
            <h1>Boot strape Badges</h1>
            <h1>Example heading <span class="badge text-bg-secondary">New</span></h1>
            <h2>Example heading <span class="badge text-bg-secondary">New</span></h2>
            <h3>Example heading <span class="badge text-bg-secondary">New</span></h3>
            <h4>Example heading <span class="badge text-bg-secondary">New</span></h4>
            <h5>Example heading <span class="badge text-bg-secondary">New</span></h5>
            <h6>Example heading <span class="badge text-bg-secondary">New</span></h6>
            <button type="button" class="btn btn-primary">
                Notifications <span class="badge text-bg-secondary">4</span>
            </button> <br />
            <button type="button" class="btn btn-primary position-relative">
                Inbox
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span class="visually-hidden">unread messages</span>
                </span>
            </button> <br />
            <button type="button" class="btn btn-primary position-relative">
                Profile
                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                    <span class="visually-hidden">New alerts</span>
                </span>
            </button>
            <hr />
        </div>
    )
}

export default Badges