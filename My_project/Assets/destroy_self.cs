using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class destroy_self : MonoBehaviour
{
    private int alive = 1;
    private int onboard = 1;
    public Transform onBoardparentTransform;
    public Transform offBoardparentTransform;

    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        float xPosition = transform.position.x;
        float yPosition = transform.position.y;
        float zPosition = transform.position.z;
        float zLocalPosition = transform.localPosition.z;

        if (yPosition < 0)
        {
            Destroy(gameObject, 2.0f);
            if (alive == 1) 
            {
                NumberDisplay numberDisplay = FindObjectOfType<NumberDisplay>();
                alive = 0;
                if (xPosition <= 2 || xPosition >= -2 ) {
                    numberDisplay.IncreaseNumber();
                }
            }
        }
        if ( zLocalPosition < -0.5 && onboard == 1){
            onboard = 0;
            gameObject.transform.SetParent(offBoardparentTransform);
        }
        
    }
}
