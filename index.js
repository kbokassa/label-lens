import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function LabelLensApp() {
  const [image, setImage] = useState(null);
  const [translatedText, setTranslatedText] = useState("");
  const [showHalalWarnings, setShowHalalWarnings] = useState(true);
  const [showChildSafety, setShowChildSafety] = useState(true);
  const [showVeganAlerts, setShowVeganAlerts] = useState(true);
  const [showGlutenFree, setShowGlutenFree] = useState(true);

  const handleTranslate = () => {
    setTranslatedText(
      "Ingredients: Water, Salt, E621 (MSG), Soy Extract, Gelatin, Alcohol.\nAllergen Alert: Contains Soy.\nWarning: Not suitable for children under 3."
    );
  };

  return (
    <div className='max-w-lg mx-auto p-6 space-y-6'>
      <h1 className='text-2xl font-bold text-center'>📦 LabelLens</h1>
      <p className='text-center text-sm text-gray-500'>
        Upload an image of packaging or a label to see what's inside.
      </p>
      <Card>
        <CardContent className='space-y-4'>
          <label className='flex items-center space-x-2'>
            <input type='checkbox' checked={showHalalWarnings} onChange={() => setShowHalalWarnings(!showHalalWarnings)} />
            <span className='text-sm'>Show Halal/Kosher dietary alerts</span>
          </label>
          <label className='flex items-center space-x-2'>
            <input type='checkbox' checked={showChildSafety} onChange={() => setShowChildSafety(!showChildSafety)} />
            <span className='text-sm'>Show child safety notes</span>
          </label>
          <label className='flex items-center space-x-2'>
            <input type='checkbox' checked={showVeganAlerts} onChange={() => setShowVeganAlerts(!showVeganAlerts)} />
            <span className='text-sm'>Show vegan alerts</span>
          </label>
          <label className='flex items-center space-x-2'>
            <input type='checkbox' checked={showGlutenFree} onChange={() => setShowGlutenFree(!showGlutenFree)} />
            <span className='text-sm'>Show gluten-free info</span>
          </label>
          <Input type='file' accept='image/*' capture='environment' onChange={(e) => setImage(e.target.files?.[0] || null)} />
          <Button className='w-full' onClick={handleTranslate} disabled={!image}>Translate Label</Button>
        </CardContent>
      </Card>
      {translatedText && (
        <div className='p-4 border rounded bg-white shadow'>
          <h2 className='text-lg font-semibold mb-2'>📄 Translated Text</h2>
          <pre className='text-sm whitespace-pre-wrap'>{translatedText}</pre>
          <div className='text-sm space-y-1'>
            {showChildSafety && <p><strong>⚠️ Safety Note:</strong> Warning: Not suitable for children under 3.</p>}
            {showHalalWarnings && <p><strong>🚫 Dietary Alert:</strong> Contains Alcohol, Gelatin (Not Halal or Kosher)</p>}
            {showVeganAlerts && <p><strong>🥦 Vegan Note:</strong> Contains Gelatin (Not Vegan)</p>}
            {showGlutenFree && <p><strong>🌾 Gluten-Free Check:</strong> No gluten-containing ingredients listed</p>}
            <p><strong>🌱 Contains:</strong> Soy, MSG</p>
          </div>
        </div>
      )}
    </div>
  );
}