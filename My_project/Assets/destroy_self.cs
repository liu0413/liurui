using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class destroy_self : MonoBehaviour
{
    private int alive = 1;
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

        if (yPosition < 0)
        {
            Destroy(gameObject, 2.0f);
            if (alive == 1) 
            {
                NumberDisplay numberDisplay = FindObjectOfType<NumberDisplay>();
                numberDisplay.IncreaseNumber();
                alive = 0;
            }
        }
        
    }
}
