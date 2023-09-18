import { MapPin } from "lucide-react"
import { LocationContainer, LocationDetails } from "./styles"

export const Location = () => {
    return(
        <LocationContainer>
        <MapPin />
        <LocationDetails>
          <span className="city">Belo Horizone</span>, <span className="state">Minas Gerais</span>
        </LocationDetails>
        </LocationContainer>
    )
}