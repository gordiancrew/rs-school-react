import '../../styles/search-bar.css';
import '../../styles/add-card.css';
import React from 'react';
function SearchBar() {
  return (
    <div className="search-bar">
      <form>
        <fieldset className="fieldset">
          <legend className="legend">Search for name:</legend>
          <input type="text" placeholder="input" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="legend">Search gender:</legend>
          <select>
            <option value="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg">
              England
            </option>
            <option value="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png">
              France
            </option>
            <option value="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEWuHCn///8jRYywGyixGySCBhr/9P76/v4lRYkFL2gfR439//0hRY4FMGMfR5AhRJNq9ChhAAABUklEQVR4nO3bu2oDMRBAUXnz2GQT2///t8aFIauLwSaBNOcUgmkGcVGrMQAAAAAAAAAAAAAAAAAAAOCHF2bjldl4YzbemY2V2fhiNg7MNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qTGYV0P1w/pt+ORYX1k+M3W/73R+GTneDyOjZ3T6TS+2Tmfz+ODnWVZxrJty/XN3I5Hhu3O8PSie1v/bNHTW6/GwkyT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNKkLfI4VUnO+x18AAAAASUVORK5CYII=">
              Nederland
            </option>
            <option value="https://flagof.ru/wp-content/uploads/2018/10/portugal-flag-194-p.jpg">
              Portugal
            </option>
          </select>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="legend">Search gender:</legend>
          <select>
            <option value="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg">
              England
            </option>
            <option value="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png">
              France
            </option>
            <option value="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEWuHCn///8jRYywGyixGySCBhr/9P76/v4lRYkFL2gfR439//0hRY4FMGMfR5AhRJNq9ChhAAABUklEQVR4nO3bu2oDMRBAUXnz2GQT2///t8aFIauLwSaBNOcUgmkGcVGrMQAAAAAAAAAAAAAAAAAAAOCHF2bjldl4YzbemY2V2fhiNg7MNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qTGYV0P1w/pt+ORYX1k+M3W/73R+GTneDyOjZ3T6TS+2Tmfz+ODnWVZxrJty/XN3I5Hhu3O8PSie1v/bNHTW6/GwkyT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNKkLfI4VUnO+x18AAAAASUVORK5CYII=">
              Nederland
            </option>
            <option value="https://flagof.ru/wp-content/uploads/2018/10/portugal-flag-194-p.jpg">
              Portugal
            </option>
          </select>
        </fieldset>

        <input type="submit" value="search" />
      </form>
    </div>
  );
}
export default SearchBar;
