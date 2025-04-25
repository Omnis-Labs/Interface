"use client"

// c53b191df51b2c4696215032c42a620e69a1a1e58031cf90bc2dddc4c07036a2
// 431d6a452e5e54dedac73cd0fe80510aa22cfcea682c92bbd389a1f75fa2790f

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAsterAPI } from "../../_context/aster-api-context"

export const AsterApiInput = () => {
    const { asterAPIkey, setAsterAPIkey, asterSecretAPIkey, setAsterSecretAPIkey } = useAsterAPI()

    return (
        <div className="bg-white p-4 space-y-2 rounded-2xl">
            <div className="space-y-1">
                <Label>Aster API Key</Label>
                <Input
                    type="text"
                    value={asterAPIkey}
                    onChange={(e) => setAsterAPIkey(e.target.value)}
                    placeholder="Enter API key"
                />
            </div>

            <div className="space-y-1">
                <Label>Aster secret API Key</Label>
                <Input
                    type="text"
                    value={asterSecretAPIkey}
                    onChange={(e) => setAsterSecretAPIkey(e.target.value)}
                    placeholder="Enter Secret API key"
                />
            </div>
        </div>
    )
}