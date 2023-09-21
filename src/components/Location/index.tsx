import { MapPin } from "lucide-react"
import { LocationContainer, LocationDetails } from "./styles"

interface LocationProps {
  city: string
  country: string
}

export const Location = ({city, country}: LocationProps) => {
    return(
        <LocationContainer>
        <MapPin />
        <LocationDetails>
          <span className="city">{city}</span>, <span className="country">{country}</span>
        </LocationDetails>
        </LocationContainer>
    )
}