import React, { useState } from "react";

const NewTrailForm = (props) => {

    const [newTrail, setNewTrail] = useState({
        name: '',
        city: '',
        zip: '',
        image_url: '',
        route_type: '',
        elevation: '',
        difficulty: '',
        length: '',
        description: ''
    })
    const [errors, setErrors] = useState('')

    const postNewTrail = async (formPayload) => {
        try {
            const response = await fetch('/api/v1/trails', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formPayload)
            })
            if(!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const postedTrail = await response.json()
            if (postedTrail.trail) {
                return true
            } else {
                setErrors(postedTrail.errors)
                return false
            }
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    const validateForm = () => {
        if (newTrail.name.trim === '') {
            setNewTrail({
                ...newTrail,
                name: null
            })
        }
        if (newTrail.city.trim === '') {
            setNewTrail({
                ...newTrail,
                city: null
            })
        }
        if (newTrail.zip.trim === '') {
            setNewTrail({
                ...newTrail,
                zip: null
            })
        }
        if (newTrail.image_url.trim === '') {
            setNewTrail({
                ...newTrail,
                image_url: null
            })
        }
        if (newTrail.route_type.trim === '') {
            setNewTrail({
                ...newTrail,
                route_type: null
            })
        }
        if (newTrail.elevation.trim === '') {
            setNewTrail({
                ...newTrail,
                elevation: null
            })
        }
        if (newTrail.difficulty.trim === '') {
            setNewTrail({
                ...newTrail,
                difficulty: null
            })
        }
        if (newTrail.length.trim === '') {
            setNewTrail({
                ...newTrail,
                length: null
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const { holdNewTrail } = newTrail
        validateForm()
        if (postNewTrail(newTrail)) {
            debugger
        } else {
            setNewTrail({
                ...holdNewTrail
            })
        }
    }

    const handleChange = (event) => {
        const updatingField = event.currentTarget.name
        setNewTrail({
            ...newTrail,
            [updatingField]: event.currentTarget.value
        })
    }

    return (
            <div className="field sign-in">
                {errors}
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Name:</p>
                        <input
                            name="name"
                            id="name"
                            type="text"
                            value={newTrail.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <p>City:</p>
                        <input 
                            name="city"
                            id="city"
                            type="text"
                            value={newTrail.city}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <p>Zip Code:</p>
                        <input 
                            name="zip"
                            id="zip"
                            type="text"
                            value={newTrail.zip}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <p>Image URL:</p>
                        <input 
                            name="image_url"
                            id="image_url"
                            type="text"
                            value={newTrail.image_url}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <p>Route Type:</p>
                        <input 
                            name="route_type"
                            id="route_type"
                            type="text"
                            value={newTrail.route_type}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <p>Elevation:</p>
                        <input 
                            name="elevation"
                            id="elevation"
                            type="text"
                            value={newTrail.elevation}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <p>Difficulty out of 10:</p>
                        <input
                            name="difficulty"
                            id="difficulty"
                            type="text"
                            value={newTrail.difficulty}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <p>Length in number of miles:</p>
                        <input
                            name="length"
                            id="length"
                            type="text"
                            value={newTrail.length}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <p>Description optional:</p>
                        <input
                            name="description"
                            id="description"
                            type="text"
                            value={newTrail.description}
                            onChange={handleChange}
                        />
                    </label>

                    <input type="submit" value="Add Trail"/>
                </form>
            </div>
    )
}

export default NewTrailForm